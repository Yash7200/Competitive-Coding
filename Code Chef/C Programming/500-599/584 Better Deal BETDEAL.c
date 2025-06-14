#include <stdio.h>
int main(void)
{
	int t,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&a,&b);
	    int da=100-a;
	    int db=200-(b*2);
	    if(da<db)
	    {
	        printf("FIRST\n");
	    }
	    else if(da>db)
	    {
	        printf("SECOND\n");
	    }
	    else
	    {
	        printf("BOTH\n");
	    }
	}
	return 0;
}