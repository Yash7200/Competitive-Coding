#include <stdio.h>
int main(void) {
	int t;
	float a,b,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%f %f %f %f",&a,&b,&x,&y);
	    float c=a/x,d=b/y;
	    if(c==d)
	    {
	        printf("Both\n");
	    }
	    else if(c>d)
	    {
	        printf("Chefina\n");
	    }
	    else if(c<d)
	    {
	        printf("Chef\n");
	    }
	}
	return 0;
}