import os
import zipfile
import xml.etree.ElementTree as ET

def extract_text_from_docx(docx_path):
    try:
        text = []
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            for paragraph in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                texts = [node.text for node in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
                if texts:
                    text.append(''.join(texts))
        return '\n'.join(text)
    except Exception as e:
        return f"Error reading docx: {str(e)}"

def main():
    folder_path = r"c:\Users\hoang\Downloads\TOAN\prompt-library\promt SKL\caulenhan"
    output_path = r"C:\Users\hoang\.gemini\antigravity-ide\brain\243b3944-1cd2-43de-83df-a94d6beabd05\caulenhan_contents.md"
    
    with open(output_path, 'w', encoding='utf-8') as outfile:
        outfile.write("# Nội dung các tài liệu trong thư mục `caulenhan`\n\n")
        
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                if file.endswith('.docx'):
                    outfile.write(f"## {file}\n")
                    outfile.write(f"**Đường dẫn:** `{file_path}`\n\n")
                    content = extract_text_from_docx(file_path)
                    outfile.write(content + "\n\n---\n\n")
                elif file.endswith('.txt'):
                    outfile.write(f"## {file}\n")
                    outfile.write(f"**Đường dẫn:** `{file_path}`\n\n")
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            outfile.write(f.read() + "\n\n---\n\n")
                    except Exception as e:
                        outfile.write(f"Error reading txt: {str(e)}\n\n---\n\n")
                elif not file.endswith(('.mp4', '.jpg', '.png', '.pdf')):
                    pass # ignore media
                    
    print(f"Extraction complete. Output saved to {output_path}")

if __name__ == '__main__':
    main()
