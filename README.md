### The sitedailyreminder function is a Google Apps Script function that checks for new entries in a Google Sheet called "Form Responses". If there is a new entry within the last hour, it will send an email notification to designated recipients based on the plant location of the entry. It also sends an email notification to a designated recipient if a QITS number is included in the entry.

#### The function is composed of several parts, including:

#### 1. The hasNumber function, which checks if a given string contains a number. This function is used later in the code to check if a QITS number is included in the entry.

#### 2. The sitedailyreminder function itself, which contains the main code that checks for new entries and sends email notifications. This function starts by getting the active spreadsheet and the sheet named "Form Responses". It then determines the last row and last column of the sheet, and extracts the data in the first row (which contains the column names) for later reference.

#### 3. The code then creates variables and stores the column numbers for certain columns that will be used later in the code. These include columns for "Credit Value", "Plant Issuing", "Timestamp", "Category", "CSR Submitting Request Email", and "QITS/QPulse Reference #".

#### 4. The function then determines the starting row for the loop, which is 30 rows before the last row of the sheet. This is because the function is designed to check for new entries within the last hour, so it only needs to look at entries that were submitted within the last hour. The check variable is set to the value of the "Plant Issuing" column in the starting row.

#### 5. The code then enters a loop that starts at the starting row and continues until the last row of the sheet. For each row in the loop, the code extracts the values of certain columns (including "Plant Issuing", "Timestamp", "QITS/QPulse Reference #", "CSR Submitting Request Email", "Credit Value", and "Category") and stores them in variables.

#### 6. The code then checks if the timestamp value is not empty. If it is not empty, it formats the timestamp value as a string in the format "yyyy-MM-dd'T'HH'Z'". This is because the email notification includes a link to the Google Sheet, and the link needs to include the timestamp value in this format.

#### 7. The code then checks if the "Plant Issuing" column in the current row is not empty. If it is not empty, the code checks which plant location it corresponds to and sets the email recipient(s) accordingly.

#### 8. The code then checks if the QITS/QPulse Reference # column contains a number. If it does, the code sends an email notification to a designated recipient with the QITS number in the subject line.

#### 9. Finally, the code sends an email notification to the designated recipient(s) with the entry information and a link to the Google Sheet.

Note that certain parts of the code (such as the email addresses and the link to the Google Sheet) have been redacted for privacy reasons.
