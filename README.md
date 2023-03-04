# automateemail

## step1 - select data range -> loop through all columns -> store columns will be used later in variables
## step2 - set loop start point -> loop by row number and store values in vars (use getrange(nxt,col)- nxt is the looping row, col can be vars I created in step1)
## step3 - set time: use spreadsheet time. This code will be executed every hour and capture all entries created in last hour
## step4 - send customized email with values in variables created by step2 