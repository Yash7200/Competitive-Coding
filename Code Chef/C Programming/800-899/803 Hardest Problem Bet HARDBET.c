#include <stdio.h>
int main(void)
{
	int t,a,b,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&a,&b,&c);
	    if((a<b)&&(a<c))
	    {
	        printf("Draw\n");
	    }
	    else if((b<a)&&(b<c))
	    {
	        printf("Bob\n");
	    }
	    else if((c<a)&&(c<b))
	    {
	        printf("Alice\n");
	    }
	}
	return 0;
}
