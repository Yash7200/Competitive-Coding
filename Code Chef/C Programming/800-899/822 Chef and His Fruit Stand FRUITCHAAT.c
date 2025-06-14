#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    int cnt=0;
	    if((x==y)||(x<y)||((x/2)<y)||((x/2)==y))
	    {
	        printf("%d\n",(x/2));
	    }
	    else if(y<(x/2))
	    {
	        printf("%d\n",y);
	    }
	}
	return 0;
}
