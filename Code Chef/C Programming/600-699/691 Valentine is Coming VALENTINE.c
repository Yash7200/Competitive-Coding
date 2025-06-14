#include <stdio.h>
int main(void) {
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&x,&y);
	    if(x<y)
	    {
	        printf("0\n");
	    }
	    else if(x==y)
	    {
	        printf("1\n");
	    }
	    else
	    {
	        printf("%d\n",(x/y));
	    }
	}
	return 0;
}

