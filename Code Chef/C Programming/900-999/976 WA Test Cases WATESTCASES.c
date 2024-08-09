//n --> no. of test cases
//s --> size of each test cases
//v --> binary string
    //if i*th bit is 1 then same test case is passed
    //otherwise test case is failed

//for better comparison take binary result as string
//find test case with smallest size
//smallest test case can be at any place so we have taken value of cases variable 101 which is higher than given range in constrain

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n;
	    scanf("%d",&n);
	    int s[n],cases=101;
	    char r[n];
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&s[j]);
	    }
	    scanf("%s",r);
	    for(int j=0;j<n;j++)
	    {
	        if(r[j]=='0' && s[j]<cases)
	        {
	            cases=s[j];
	        }
	    }
	    printf("%d\n",cases);
	}
	return 0;
}