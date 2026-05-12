import os
import re

def update_references(directory):
    # Regex to match image extensions in strings or imports, but only for local assets
    # We look for patterns like "@/assets/...", "../assets/...", "/src/assets/..."
    pattern = re.compile(r'((?:@/assets/|\.\./assets/|/src/assets/)[^"\']+\.)(?:png|jpg|jpeg)', re.IGNORECASE)
    
    for root, dirs, files in os.walk(directory):
        for filename in files:
            if filename.endswith(('.tsx', '.ts', '.html', '.css')):
                file_path = os.path.join(root, filename)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = pattern.sub(r'\1webp', content)
                
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated references in: {file_path}")

if __name__ == "__main__":
    src_dir = 'src'
    if os.path.exists(src_dir):
        update_references(src_dir)
    else:
        print(f"Directory {src_dir} not found.")
