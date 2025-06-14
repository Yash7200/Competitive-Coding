#include <stdio.h>
int main(void)
{
	int t,cnt;
	scanf("%d",&t);
	for(int i=10;i>=1;i--)
	{
	    if((t%i)==0)
	    {
	        cnt=i;
	        break;
	    }
	}
	printf("%d\n",cnt);
	return 0;
}
