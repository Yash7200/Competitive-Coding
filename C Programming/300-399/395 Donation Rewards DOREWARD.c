//x --> no. of donations

//x<=3 --> BRONZE
//x>3 && x<=6 --> SILVER
//X>6 --> GOLD
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int x;
	    scanf("%d",&x);
	    if(x<=3)
	    {
	        printf("BRONZE\n");
	    }
	    else if(x>3 && x<=6)
	    {
	        printf("SILVER\n");
	    }
	    else if(x>6)
	    {
	        printf("GOLD\n");
	    }
	}
	return 0;
}