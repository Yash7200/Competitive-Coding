#include <stdio.h>
int main(void)
{
	int t;
	float x1,x2,y1,y2;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d",&x1,&x2,&y1,&y2);
	    float c1=y1/x1,c2=y2/x2;
	    if(c1==c2)
	    {
	        printf("0\n");
	    }
	    else if(c1<c2)
	    {
	        printf("-1\n");
	    }
	    else if(c2<c1)
	    {
	        printf("1\n");
	    }
	}
	return 0;
}
