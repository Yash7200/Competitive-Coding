//3 political party
//any political party wins if it have more than 50% votes
//print NOTA if any political party doesn't win
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a,b,c;
	    scanf("%d %d %d",&a,&b,&c);
	    if(a>50)
	    {
	        printf("A\n");
	    }
	    else if(b>50)
	    {
	        printf("B\n");
	    }
	    else if(c>50)
	    {
	        printf("C\n");
	    }
	    else
	    {
	        printf("NOTA\n");
	    }
	}
	return 0;
}