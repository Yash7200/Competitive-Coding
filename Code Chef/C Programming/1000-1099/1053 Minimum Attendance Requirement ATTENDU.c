//Problem Simplification:
    //120 working days are in a sem.
    //>= 75% attendance is required to pass.
    //We'll be given data of 'n' working days/array of size.
    //0 in input indicates chef was absent on specific day.
    //1 in input indicates chef was present on specific day.

//Logic:
    //We'll store input data as a string with a view to count days when chef was present.
    //We've used for loop in line no. 18 to count days with present mark.
    //We'll directly make chef present on remaining days.
    //75% of 120 days will be 90 days if chef is present exactly or more than 90 days then he'll pass the semester

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,cnt=0;
	    scanf("%d",&n);
	    char s[n];
	    scanf("%s",s);
	    for(int j=0;j<n;j++)
	    {
	        if(s[j]=='1')
	        {
	            cnt++;
	        }
	    }
	    cnt=120-n+cnt;
	    if(cnt>=90)
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}