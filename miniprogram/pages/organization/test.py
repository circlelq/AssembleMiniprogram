f = open("test.txt", "r")
f1 = open("test1.txt", "a")
for x in f:
    f1.write('"pages/organization/' + x[0:-1] + '/' + x[0:-1] + '",\n')
