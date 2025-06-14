//N episode from 1 to N

//Even episode---> A min long
//Odd episode---> B min long

//Calculate total duration
#include <stdio.h>
int main(void)
{
	int t,n,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&n,&a,&b);
	    if(n==1)
	    {
	        printf("%d\n",b);
	    }
	    else if( (n%2) == 0)
	    {
	        printf("%d\n",( (n/2) * a) + (n/2) * b );
	    }
	    else
	    {
	        printf("%d\n",( (n/2) * a) + ((n- (n/2)) * b ) );
	    }
	}
	return 0;
}