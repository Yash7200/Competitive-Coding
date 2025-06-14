#include <stdio.h>
int main(void)
{
	int t;
	float x1,x2,x3,v1,v2;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%f %f %f %f %f",&x1,&x2,&x3,&v1,&v2);
	    if(((x3-x1)/v1)==((x2-x3)/v2))
	    {
	        printf("Draw\n");
	    }
	    else if(((x3-x1)/v1)<((x2-x3)/v2))
	    {
	        printf("Chef\n");
	    }
	    else if(((x3-x1)/v1)>((x2-x3)/v2))
	    {
	        printf("Kefa\n");
	    }
	}
	return 0;
}