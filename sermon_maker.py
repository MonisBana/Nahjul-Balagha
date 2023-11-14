import re
import os
import pandas as pd
df = pd.read_csv("Letter_title.csv")
df['Title'] = df['Title'].fillna("")
with open('Letters_cleaned.md', 'r', encoding="utf-8") as f:
    for line in f:
        if re.match(r'^\*\*Letter [0-9]+\*\*|^\*\*Document [0-9]+\*\*|^\*\*Instruction [0-9]+\*\*|^\*\*Invocation [0-9]+\*\*|^\*\*Will [0-9]+\*\*|^\*\*Commandment [0-9]+\*\*', line):
            sermon_no = ''.join(re.findall('[0-9]+',line))
            filename = sermon_no+".md"
            title = df["Title"][int(sermon_no)-1]
            if "\\" in title:
                title = title.replace("\\","")
            meta= f'---\ntitle: "{title}" \n---\n'
            line = meta +line
            with open(filename, "a+", encoding="utf-8") as f1:
                    f1.write(line)
        else:
            if filename is None:
                continue
            else:
                with open(filename, "a+", encoding="utf-8") as f1:
                    f1.write(line)
                    

