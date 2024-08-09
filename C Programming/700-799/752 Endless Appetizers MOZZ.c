//more than 'x' mozzarella sticks --> 30 rupees per extra stick
// we need to find total sticks by adding rupees of extra sticks into x.

// after adding it to x we'll divide if it reminder is 0 then print it otherwise add 1 more plate.
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int j=0;j<t;j++)
	{
	    int x,y,r;
	    scanf("%d %d %d",&x,&y,&r);
	    x=x+(r/30);
	    if((x%y)==0)
	    {
	        printf("%d\n",(x/y));
	    }
	    else
	    {
	        printf("%d\n",((x/y)+1) );
	    }
	}
	return 0;
}