import sqlite3
# sqlite3 comes with python by default, just import sqlite3
connect = sqlite3.connect('test.db') # Use the database name 'test.db'

# connect.execute("DROP TABLE IF EXISTS TEST") # Drops (delete table)
# # is going to have an ID, If we have this ID we can have acces to all oter details 
# #(It gives the identifier that we need to identify a particular instance) and not null (it needs to have a value)
                       
# connect.execute('''CREATE TABLE TEST    
#             (ID INT PRIMARY KEY NOT NULL,   
#             NAME TEXT NOT NULL,
#             AGE INT NOT NULL);''') # This command is used to create a table in SQL (and a *.db file), then all the attributes of that table (like our 'ID','NAME',ETC.)

connect.execute("INSERT INTO TEST (ID,NAME,AGE) VALUES (1,'ALEX',25)")
connect.execute("INSERT INTO TEST (ID,NAME,AGE) VALUES (2,'GRETTEL',2)")

all_data = connect.execute('''SELECT * FROM TEST''')
for row in all_data:
    print(row)

connect.close() # We need to close the connection after


