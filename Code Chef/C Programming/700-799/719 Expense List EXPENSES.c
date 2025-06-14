#include <stdio.h>
#include <math.h>
int main(void)
{
	int t,n,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&x);
	    int inc=pow(2,x);
	    for(int j=0;j<n;j++)
	    {
	        inc=inc-(inc/2);
	    }
	    printf("%d\n",inc);
	}
	return 0;
}
