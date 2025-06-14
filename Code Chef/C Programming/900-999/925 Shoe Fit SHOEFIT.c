#include <stdio.h>
int main(void)
{
	int t,a,b,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int lcnt=0,rcnt=0;
	    scanf("%d%d%d",&a,&b,&c);
	    if(a==0)
	    {
	        lcnt++;
	    }
	    else if(a==1)
	    {
	        rcnt++;
	    }
	    if(b==0)
	    {
	        lcnt++;
	    }
	    else if(b==1)
	    {
	        rcnt++;
	    }
	    if(c==0)
	    {
	        lcnt++;
	    }
	    else if(c==1)
	    {
	        rcnt++;
	    }
	    if(lcnt==3||rcnt==3)
	    {
	        printf("0\n");
	    }
	    else if(lcnt>rcnt)
	    {
	        printf("%d\n",(lcnt-rcnt));
	    }
	    else if(rcnt>lcnt)
	    {
	        printf("%d\n",(rcnt-lcnt));
	    }
	}
	return 0;
}
