import re
import json
import os
from datetime import datetime

# Read the artifact
artifact_path = r"C:\Users\hoang\.gemini\antigravity-ide\brain\243b3944-1cd2-43de-83df-a94d6beabd05\caulenhan_contents.md"
with open(artifact_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by ## 
sections = content.split('## ')
if len(sections) > 1:
    sections = sections[1:] # discard the first part before the first ##

new_prompts = []
current_id = 43
today = datetime.now().strftime("%Y-%m-%d")

for sec in sections:
    lines = sec.strip().split('\n')
    if not lines: continue
    title = lines[0].strip()
    
    # Extract content (excluding the title and file path line)
    content_lines = []
    for line in lines[1:]:
        if line.startswith('**Đường dẫn:**'):
            continue
        if line.strip() == '---':
            continue
        content_lines.append(line)
        
    full_content = '\n'.join(content_lines).strip()
    if not full_content:
        continue
        
    # truncate description for the card
    desc = full_content[:150].replace('\n', ' ') + "..."
    
    new_prompt = {
        "id": current_id,
        "title": title.replace('.docx', '').replace('.txt', ''),
        "description": desc,
        "category": "Giáo án", # default
        "author": "Thầy Toàn AI",
        "content": full_content,
        "likes": 0,
        "date": today,
        "isNew": True
    }
    new_prompts.append(new_prompt)
    current_id += 1

# Now append to src/data.js
data_js_path = r"c:\Users\hoang\Downloads\TOAN\prompt-library\src\data.js"
with open(data_js_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

# Find the end of the prompts array.
# The file ends with:
#   }
# ]
# We need to insert our new entries before the closing bracket.

# A safer way is to find the last closing brace of the last object in the prompts array.
last_brace_idx = data_content.rfind('}')
bracket_idx = data_content.find(']', last_brace_idx)

if last_brace_idx != -1 and bracket_idx != -1:
    # Prepare the new JSON strings
    new_entries_str = ""
    for p in new_prompts:
        new_entries_str += ",\n  " + json.dumps(p, ensure_ascii=False, indent=4)
        
    # Insert new entries
    updated_data = data_content[:last_brace_idx+1] + new_entries_str + "\n" + data_content[bracket_idx:]
    
    with open(data_js_path, 'w', encoding='utf-8') as f:
        f.write(updated_data)
    print(f"Added {len(new_prompts)} new prompts to data.js")
else:
    print("Could not find the insertion point in data.js")
