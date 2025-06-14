#include <stdio.h>
int main(void)
{
	int t,n,l,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&n,&l,&x);
	    if(n==0||x==0)
	    {
	        printf("0\n");
	    }
	    else
	    {
	        int r=n-l;
	        if(l<=r)
	        {
	            printf("%d\n",(l*x));
	        }
	        else
	        {
	            printf("%d\n",(r*x));
	        }
	    }
	}
	return 0;
}
