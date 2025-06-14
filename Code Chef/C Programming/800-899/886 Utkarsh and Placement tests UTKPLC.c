#include <stdio.h>
int main(void)
{
	int t;
	char c1,c2,c3,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf(" %c %c %c",&c1,&c2,&c3);
	    scanf(" %c %c",&x,&y);
	    if(x==c1)
	    {
	        printf("%c\n",x);
	    }
	    else if(y==c1)
	    {
	        printf("%c\n",y);
	    }
	    else if(x==c2)
	    {
	        printf("%c\n",x);
	    }
	    else if(y==c2)
	    {
	        printf("%c\n",y);
	    }
	    else if(x==c3)
	    {
	        printf("%c\n",x);
	    }
	    else if(y==c3)
	    {
	        printf("%c\n",y);
	    }
	}
	return 0;
}
