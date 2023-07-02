//s --> date string
//identify date formate

//string can be in 2 format
//ddmmyyyy or mmddyyyy

//m --> indicates first 2 digits of date
//n --> indicates middle 2 digits of date

// we are converting string into integer for comparison
// for conversion we have to abstract 48

#include <stdio.h>
int main(void)
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        char s[10];
        scanf("%s",s);
        int m=( ((int) s[0]-48)*10)+( (int) s[1]-48);
        int n=( ((int) s[3]-48)*10)+( (int) s[4]-48);
        
        if(m<=12 && n>12)
        {
            printf("MM/DD/YYYY\n");
        }
        else if(m>12 && n<=12)
        {
            printf("DD/MM/YYYY\n");
        }
        else
        {
            printf("BOTH\n");
        }
    }
	return 0;
}