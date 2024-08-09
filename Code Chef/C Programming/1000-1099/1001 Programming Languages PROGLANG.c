//a,b --> required features
//a1,b1 --> features of language 1
//a2,b2 --> features of language 2

//print 1 for switching to 1st language
//print 2 for switching to 2nd language
//print 0 if switching is not possible
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a,b,a1,b1,a2,b2;
	    scanf("%d %d %d %d %d %d",&a,&b,&a1,&b1,&a2,&b2);
	    if( (a1==a||a1==b) && (b1==a||b1==b) )
	    {
	        printf("1\n");
	    }
	    else if( (a2==a||a2==b) && (b2==a||b2==b) )
	    {
	        printf("2\n");
	    }
	    else
	    {
	        printf("0\n");
	    }
	}
	return 0;
}