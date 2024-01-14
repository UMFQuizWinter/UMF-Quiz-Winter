import csv

data = []
with open("./data/fizio2-2022w.csv", 'r', encoding="utf-8") as file:
    csvreader = csv.reader(file)
    for row in csvreader:
        # print(row)
        data.append(row)
questions = []
total_answers = []
answers = []
data_filtered = []
is_correct = []
for i in range(0, len(data)):
    if i == 0 or (data[i - 1][0] == '' and data[i - 1][1] == ''):
        # is question
        # questions.append(data[i][1])
        data_filtered.append((data[i][1]))
        # print(data[i][0])
    elif data[i][1] == '':
        # is blank
        pass
    else:
        # is answer
        data_filtered.append((data[i][1]))
        if data[i][0] == "" or data[i][0] == "FALSE":
            # print(data[i][0], False)
            is_correct.append(False)
            # print("FALSE")
        else:
            # print(data[i][0], True)
            is_correct.append(True)
            # print(data[i][0])

is_correct = is_correct[0:4400]

# total_answers = total_answers[1:len(total_answers)]
# for i in data_filtered:
#     print(i[0:len(i)-1])
# print(total_answers[0][9])
# for i in range(0, len(questions)):
#     print(f"Question #{i}: {questions[i]}")
#     for j in range(0, len(total_answers[i])):
#         print(f"Answer #{j}: {total_answers[i][j]}")

for i in data_filtered:
    # print(i.split(" ")[0].split(".")[0], i.split(" ")[0].split(".")[0].isdigit())
    if not i.split(" ")[0].split(".")[0].isdigit():
        data_filtered.remove(i)

short_data_filtered = data_filtered
countQ = -1
countA = 0
# print(short_data_filtered[10].split(" ")[0].split(".")[0] == '1')
for i in range(0, len(short_data_filtered)):
    if i % 11 == 0:
        # question
        questions.append(data_filtered[i])
        countQ += 1
        # print(f"i = {i}, Question{countQ}: {short_data_filtered[i]}")
    else:
        if i % 11 == 1:
            # print(f"New Answers!")
            total_answers.append(answers)
            answers = [data_filtered[i]]
            # print(f"i = {i} Answer 0 to Q{countQ}: {data_filtered[i]}")
            countA = 0
        else:
            countA += 1
            answers.append(data_filtered[i])
            # print(f"i = {i} Answer {countA} to Q{countQ}: {data_filtered[i]}")

# print(len(is_correct))
total_answers = total_answers[1:len(total_answers)]
questions = questions[0:len(questions) - 1]


# print(len(total_answers), len(questions))
#
# for i in range(0, len(questions)):
#     print(f"Question: {questions[i]}")
#     for j in range(0, len(total_answers[i])):
#         print(f"Q{i}A{j}: {total_answers[i][j]}, isCorrect: {is_correct[i % 10]}")

# print(i.split(" ")[0].split(".")[0], i.split(" ")[0].split(".")[0].isdigit())
# print(len(data_filtered))
def listToString(s):
    # initialize an empty string
    str1 = ""

    # traverse in the string
    for ele in s:
        str1 += ele

    # return string
    return str1
def clean_up_string(str):
    str = str[0:len(str) - 1]
    str = str.split(" ", 1)[1]
    return str


#
# for i in questions:
#         i = clean_up_string(i)
#         print(i)
#
with open('data_fizio.json', 'w', encoding="utf-8") as file:
    file.write('{ \n "entries" : [ \n')
    for i in range(0, len(questions)):
        file.write('{ \n')
        file.write(f' "Question" : "{clean_up_string(questions[i][0:len(questions)-1])}",\n ')
        file.write(f' "Answers" : [\n')
        for j in range(0, len(total_answers[i])):
            if is_correct[i * 10 + j]:
                truth_val = "true"
            else:
                truth_val = "false"
            if j == len(total_answers[i])-1:
                # fara virgula
                str = '{' + '"ans" :' + ' " ' + clean_up_string(total_answers[i][j]) + ' ","correct" : "' + truth_val + '" }\n'
            else:
                str = '{' + '"ans" :' + ' " ' + clean_up_string(total_answers[i][j]) + ' ","correct" : "' + truth_val + '" },\n'

            file.write(str)
        file.write(']')
        if i == len(questions)-1:
            file.write('}')
        else:
            file.write('},')
    file.write('] \n }')
