import re
def Main(filename: str):
    fname = filename
    def FI(x: float): return int(x) if x.is_integer() else x
    ogwidth = 10
    olwidth = 15
    offset = FI((olwidth-ogwidth)/2)
    color = "#ffffff"
    f = open(fname+".svg", "r")
    s = f.read()
    hwre = re.compile(r'height="(.*?)" width="(.*?)"')
    s = re.sub(hwre, lambda m: f'height="{FI(float(m.group(1))+olwidth-ogwidth)}" width="{FI(float(m.group(2))+olwidth-ogwidth)}"', s)
    allstrkre = re.compile(r'\s*(?:<path[\S\s]*?\/>[\n\s]*)+')
    strkre = re.compile(r'(<path[\S\s]*?stroke=").*?(".*?stroke-width=").*?(".*?\/>)')
    strokes = re.search(allstrkre, s).group(0)
    outlines = re.sub(strkre, lambda m: f'{m.group(1)}{color}{m.group(2)}{olwidth}{m.group(3)}', strokes)
    s = re.sub(allstrkre, outlines+strokes, s)
    g0 = re.compile(r'<svg.*?>')
    s = re.sub(g0, lambda m:f'{m.group(0)}<g transform="translate({offset} {offset})">', s)
    g1 = re.compile(r'</svg>')
    s = re.sub(g1, "</g></svg>", s)
    ans = open(fname+"_ol.svg", "w")
    ans.write(s)
l = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D"]
for i in l: Main(i)