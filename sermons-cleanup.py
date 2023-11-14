with open('Letters.md','r',encoding="utf-8") as reader:
    data  = reader.read()
x  = [str(i)+"\n" for i in range(708,827)]
for i in x:
    data = data.replace(i,"")
with open('Letters_cleaned.md','w',encoding="utf-8") as f:
    f.write(data)
    f.close()
