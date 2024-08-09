//Problem Simplification:
    //n --> no. of days traded by Chef/Array size
    //A<i> --> profit/loss made by Chef
    //Calculate maximum profit by ignoring 1 day

//Logic:
    //create 2 additional variables: sum,min
    //set sum=0, min=999999 because sum=0 can be used for addition & subtraction easily, min=999999 will be used to find lowest value & later it will be subtracted from sum
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,sum=0,min=999999;
	    scanf("%d",&n);
	    int a[n];
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        sum=sum+a[j];
	        if(a[j]<min)
	        {
	            min=a[j];
	        }
	    }
	    sum=sum-min;
	    printf("%d\n",sum);
	}
	return 0;
}