//a --> health of Anna
//b --> health of Bob
//c --> health of Claudio

//fight between each player happens for exactly once.
//fight can happen in any order.

//to keep code simple assume with between b & c.
//winner will fight with Anna
#include <stdio.h>
#include <math.h>
int main(void)
{
	int t,a,b,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&a,&b,&c);
	    int h=fmin(b,c);
	    b=b-h;
	    c=c-h;
	    if(b>=c)
	    {
	        h=fmin(a,b);
	        a=a-h;
	        b=b-h;
	        if(a<=0)
	        {
	            printf("NO\n");
	        }
	        else
	        {
	            printf("YES\n");
	        }
	    }
	    else
	    {
	        h=fmin(a,c);
	        a=a-h;
	        c=c-h;
	        if(a<=0)
	        {
	            printf("NO\n");
	        }
	        else
	        {
	            printf("YES\n");
	        }
	    }
	}
	return 0;
}