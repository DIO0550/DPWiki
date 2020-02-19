import csv;
import sys

args = sys.argv

if 2 > len(args):
    exit

file_path = args[1]

types = {
    "ノーマル":"1",  
    "ほのお":"2",
    "みず":"3",
    "でんき":"4",          
    "くさ":"5",         
    "こおり":"6",          
    "かくとう":"7",       
    "どく":"8",
    "じめん":"9",    
    "ひこう":"10",       
    "エスパー":"11",
    "むし":"12",
    "いわ":"13",
    "ゴースト":"14", 
    "ドラゴン":"15",
    "あく":"16", 
    "はがね":"17",
    "フェアリー":"18",
    "":"19"  
}

with open('pmonsters.txt', 'w') as write_file:
    first_line = "Number,Name,Type1,Type2,HitPoint,Attack,Defence,SpecialAttack,SpecialDefence,Speed\n"
    write_file.write(first_line)
    with open(file_path, 'r') as f:
        read_file = csv.reader(f, delimiter=',')
        # headerスキップ
        next(read_file)
        for row in read_file:
            write_string = ""
            if row[0].isdigit():
                write_string += row[0].zfill(4)
            else:
                write_string += row[0]
            
            write_string += ","
            write_string += row[1]
            write_string += ","
            write_string += types[row[2]]
            write_string += ","
            write_string += types[row[3]]
            write_string += ","
            write_string += row[7]
            write_string += ","
            write_string += row[8]
            write_string += ","
            write_string += row[9]
            write_string += ","
            write_string += row[10]
            write_string += ","
            write_string += row[11]
            write_string += ","
            write_string += row[12]
            write_string += "\n"
            write_file.write(write_string)