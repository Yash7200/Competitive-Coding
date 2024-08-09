//Problem Simplification:
    //we'll be given 2 binary strings containing 0s & 1s
    //we're supposed to determine if it is possible to make them equal or not

//Logic
    //store both input as string
    //create 2 variables for counting occurrences of 1s in both string
    //If both have same no. of 1s then we can make them equal
    //Note:Don't count occurrences of both 0s & 1s, you'll get wrong answer for last test case

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n;
	    scanf("%d",&n);
	    char a[n],b[n];
	    scanf("%s",a);
	    scanf("%s",b);
	    int oa=0,ob=0;
	    for(int j=0;j<n;j++)
	    {
	        if(a[j]=='1')
	        {
	            oa++;
	        }
	        if(b[j]=='1')
	        {
	            ob++;
	        }
	    }
	    if(oa==ob)
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