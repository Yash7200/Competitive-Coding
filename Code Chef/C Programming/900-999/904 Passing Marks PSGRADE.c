#include <stdio.h>
int main(void)
{
	int t,am,bm,cm,tm,a,b,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d %d %d %d",&am,&bm,&cm,&tm,&a,&b,&c);
	    if((((a>=am)&&(b>=bm))&&(c>=cm))&&((a+b+c)>=tm))
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
