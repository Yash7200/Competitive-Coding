#include <stdio.h>

int main(void)
{
	int t,l,r;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&l,&r);
	    int cnt=0;
	    for(int j=l;j<=r;j++)
	    {
	        if(((j%10)==2)||((j%10)==3)||((j%10)==9))
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}
