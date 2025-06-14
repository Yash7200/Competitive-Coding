#include <stdio.h>
int main(void)
{
	int t,z,y,a,b,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d %d",&z,&y,&a,&b,&c);
	    if((z-y)>=(a+b+c))
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
