//n --> seat no.

//if n is in range 1-10 Lower Double
//if n is in range 11-15 Lower Single
//if n is in range 16-25 Upper Double
//if n is in range 26-30 Upper Single
#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    if(n<16)
	    {
	        if(n<11)
	        {
	            printf("Lower Double\n");
	        }
	        else
	        {
	            printf("Lower Single\n");
	        }
	    }
	    else
	    {
	        if(n<26)
	        {
	            printf("Upper Double\n");
	        }
	        else
	        {
	            printf("Upper Single\n");
	        }
	        
	    }
	}
	return 0;
}