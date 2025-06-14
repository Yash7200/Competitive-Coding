#include <stdio.h>
int main(void)
{
	int t,p,m,v;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&p,&m,&v);
	    if(p==1)
	    {
	        printf("%d\n",(m*v));
	    }
	    else
	    {
	        printf("%d\n",((m-p+1)*v));
	    }
	}
	return 0;
}
