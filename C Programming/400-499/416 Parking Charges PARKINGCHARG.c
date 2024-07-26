//x --> price for 1 hr
//y --> price after 1 hr
//h --> hours of parking

//if parking is used for 1 hr then price will be x
//if parking is used for more than 1 hr then price will be x+((h-1)*(y))

#include <stdio.h>
int main(void)
{
	int x,y,h;
	scanf("%d %d %d",&x,&y,&h);
	if(h==1)
	{
	    printf("%d\n",x);
	}
	else
	{
	    printf("%d\n",((y*(h-1))+x));
	}
	return 0;
}