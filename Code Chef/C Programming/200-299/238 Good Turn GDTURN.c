//'x' --> number on dice throwed by chef
//'y' --> number on dice throwed by chefina

//x+y --> good if sum > 6
#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    if((x+y)>6)
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}