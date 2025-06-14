//We have populated the solutions for the 10 easiest problems for your support.
//Click on the SUBMIT button to make a submission to this problem.
#include<stdio.h>
int main()
{
	int t,i,a,b;
	scanf("%d",&t);
	for(i=0;i<t;i++)
	{
	    scanf("%d%d",&a,&b);
	    printf("%d\n",(a%b));
	}
}
