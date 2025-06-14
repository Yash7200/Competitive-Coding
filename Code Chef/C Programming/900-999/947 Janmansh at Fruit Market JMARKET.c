#include <stdio.h>
#include <math.h>
int main(void)
{
	int t,a,b,c,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d",&x,&a,&b,&c);
	    if((fmax(fmax(a,b),c))==a)
	    {
	        if(fmax(b,c)==b)
	        {
	            printf("%d\n",(x-1)*c+b);
	        }
	        else
	        {
	            printf("%d\n",(x-1)*b+c);
	        }
	    }
	    else if((fmax(fmax(a,b),c))==b)
	    {
	        if(fmax(a,c)==a)
	        {
	            printf("%d\n",(x-1)*c+a);
	        }
	        else
	        {
	            printf("%d\n",(x-1)*a+c);
	        }
	        
	    }
	    else if((fmax(fmax(a,b),c))==c)
	    {
	        if(fmax(a,b)==a)
	        {
	            printf("%d\n",(x-1)*b+a);
	        }
	        else
	        {
	            printf("%d\n",(x-1)*a+b);
	        }
	    }
	}
	return 0;
}
