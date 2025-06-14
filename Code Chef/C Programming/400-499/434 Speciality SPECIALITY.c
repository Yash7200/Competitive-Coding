#include <stdio.h>
int main(void) 
{
	int t,x,y,z;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&x,&y,&z);
	    if((x>y)&&(x>z))
	    {
	        printf("Setter\n");
	    }
	    else if((y>x)&&(y>z))
	    {
	        printf("Tester\n");
	    }
	    else if((z>y)&&(z>x))
	    {
	        printf("Editorialist\n");
	    }
	    
	}
	return 0;
}

