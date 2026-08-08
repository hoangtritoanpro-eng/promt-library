import re
import json
import os
from datetime import datetime

md_file = r"C:\Users\hoang\.gemini\antigravity-ide\brain\243b3944-1cd2-43de-83df-a94d6beabd05\caulenhan_contents.md"
data_js_file = r"c:\Users\hoang\Downloads\TOAN\prompt-library\src\data.js"

def get_category_from_title(title):
    t = title.lower()
    if "mầm non" in t: return "Mầm non"
    if "tiểu học" in t: return "Tiểu học"
    if "thcs" in t: return "THCS"
    if "thpt" in t: return "THPT"
    if "đại học" in t: return "Đại học"
    if "skkn" in t or "sáng kiến" in t: return "Sáng kiến kinh nghiệm"
    if "notebooklm" in t: return "NotebookLM"
    if "veo3" in t: return "Video AI"
    return "Giáo án"

def parse_markdown():
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()

    sections = content.split('## ')
    extracted_prompts = []
    current_id = 43
    today = datetime.now().strftime("%Y-%m-%d")

    for section in sections[1:]:
        lines = section.strip().split('\n')
        if not lines: continue
        
        section_title = lines[0].strip().replace('.docx', '').replace('.txt', '')
        category = get_category_from_title(section_title)
        
        current_prompt_title = None
        current_prompt_content = []
        
        for line in lines[1:]:
            if line.startswith('**Đường dẫn:**') or line.strip() == '---':
                continue
                
            stripped = line.strip()
            
            # Heuristic to detect a new prompt
            is_new_prompt = False
            title_match = None
            
            # Match formats like: "PROMPT 1:", "Câu lệnh 1:", "1. Tên câu lệnh", "Prompt: ..."
            match = re.match(r'^(?:PROMPT|Prompt|Câu lệnh|CAU LENH|CÂU LỆNH)\s*(?:\d+)?[:\-]?\s*(.*)', stripped, re.IGNORECASE)
            if match and len(stripped) < 100:
                is_new_prompt = True
                title_match = stripped
            elif re.match(r'^\d{1,2}\.\s+([A-Z].*)', stripped) and len(stripped) < 80:
                is_new_prompt = True
                title_match = stripped
                
            if is_new_prompt:
                # Save previous prompt
                if current_prompt_title and len(current_prompt_content) > 0:
                    content_text = '\n'.join(current_prompt_content).strip()
                    if content_text:
                        desc = content_text[:120].replace('\n', ' ') + "..."
                        extracted_prompts.append({
                            "id": current_id,
                            "title": current_prompt_title,
                            "description": desc,
                            "category": category,
                            "author": "Thầy Toàn AI",
                            "content": content_text,
                            "likes": 0,
                            "date": today,
                            "isNew": True
                        })
                        current_id += 1
                        
                current_prompt_title = title_match
                current_prompt_content = []
            else:
                if current_prompt_title is not None:
                    current_prompt_content.append(line)
                    
        # Save the last prompt in the section
        if current_prompt_title and len(current_prompt_content) > 0:
            content_text = '\n'.join(current_prompt_content).strip()
            if content_text:
                desc = content_text[:120].replace('\n', ' ') + "..."
                extracted_prompts.append({
                    "id": current_id,
                    "title": current_prompt_title,
                    "description": desc,
                    "category": category,
                    "author": "Thầy Toàn AI",
                    "content": content_text,
                    "likes": 0,
                    "date": today,
                    "isNew": True
                })
                current_id += 1
                
    return extracted_prompts

def update_data_js(new_prompts):
    with open(data_js_file, 'r', encoding='utf-8') as f:
        data_js_content = f.read()
        
    # We need to extract the existing prompts up to ID 42.
    # It's a bit tricky to parse JS with regex if it's complex, but we can do string manipulation.
    # We will search for all entries and only keep those with id < 43.
    
    # Alternatively, since data.js exports `categories` and `prompts`, we can re-generate the file safely
    # by parsing the first part of the file up to the end of `prompts`.
    
    # Since I don't want to break the file, let's extract the first 42 prompts from the text manually,
    # or just use a regex to find all prompts.
    
    # Let's find the start of prompts array
    prompts_start = data_js_content.find('export const prompts = [')
    
    # The file ends with:
    #   }
    # ]
    
    # Let's write a simple JS parser in Python, or just regex
    import json
    # Extract categories
    cat_match = re.search(r'export const categories = (\[.*?\]);', data_js_content, re.DOTALL)
    categories_str = cat_match.group(1) if cat_match else '[]'
    
    # Extract the prompts part
    # Find all { ... } blocks inside prompts
    # Actually, we can just split the file at id: 43 if it exists.
    # We know we appended id: 43 onwards at the end.
    idx_43 = data_js_content.find('"id": 43')
    if idx_43 == -1:
        idx_43 = data_js_content.find('id: 43')
        
    if idx_43 != -1:
        # Find the comma before this id block
        # The block usually starts with {
        block_start = data_js_content.rfind('{', 0, idx_43)
        comma_idx = data_js_content.rfind(',', 0, block_start)
        clean_content = data_js_content[:comma_idx] + "\n]"
    else:
        # no id 43 found, just use as is
        clean_content = data_js_content
        
    # Remove the trailing "]"
    last_bracket = clean_content.rfind(']')
    clean_content = clean_content[:last_bracket]
    
    new_entries_str = ""
    for p in new_prompts:
        new_entries_str += ",\n  " + json.dumps(p, ensure_ascii=False, indent=4)
        
    updated_data = clean_content + new_entries_str + "\n];\n"
    
    # Ensure categories are updated to include our new categories if not present
    cats = ["Mầm non", "Tiểu học", "THCS", "THPT", "Đại học", "Sáng kiến kinh nghiệm", "NotebookLM", "Video AI"]
    for c in cats:
        if f'"{c}"' not in categories_str:
            categories_str = categories_str.replace(']', f',\n  "{c}"\n]')
            
    updated_data = f"export const categories = {categories_str};\n\nexport const prompts = [\n" + updated_data.split('export const prompts = [')[1]
    
    with open(data_js_file, 'w', encoding='utf-8') as f:
        f.write(updated_data)

new_prompts = parse_markdown()
print(f"Extracted {len(new_prompts)} prompts.")
update_data_js(new_prompts)
print("Updated data.js")

