//k --> amount in ATM
//n --> no. of people/size of array
//if ATM has required amount of money then print 1 for each such people
//otherwise print 0 for such people
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,k;
	    scanf("%d %d",&n,&k);
	    int a[n];
	    char o[n];
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        if(a[j]>k || k==0)
	        {
	            o[j]='0';
	        }
	        else
	        {
	            k=k-a[j];
	            o[j]='1';
	        }
	    }
	    printf("%s\n",o);
	}
	return 0;
}