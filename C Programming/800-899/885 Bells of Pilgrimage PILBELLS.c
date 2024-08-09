//n --> bells to be rang
//p --> initial mana level

//1st 'x' bells increase mana level by 10
//remaining bells increase mana level by 5
//last bell increases mana level by 20

//k --> bells rang by child
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,x,k,p;
	    scanf("%d %d %d %d",&n,&x,&k,&p);
	    if(k==0)
	    {
	        printf("%d\n",p);
	    }
	    else if(k<n)
	    {
	        if(k==x)
	        {
	            p=p+(x*10);
	        }
	        else if(k<x)
	        {
	            p=p+(k*10);
	        }
	        else if(k>x)
	        {
	            p=p+(x*10)+((k-x)*5);
	        }
	        printf("%d\n",p);
	    }
	    else if(k==n)
	    {
	        if(k>x)
	        {
	            p=p+(x*10)+((k-x)*5)+20;
	        }
	        printf("%d\n",p);
	    }
	}
	return 0;
}