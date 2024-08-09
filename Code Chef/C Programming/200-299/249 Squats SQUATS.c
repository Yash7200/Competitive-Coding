//'x' --> no. of squat sets
//each set has 15 squats
// total squats=x*15
#include <stdio.h>
int main(void)
{
	int t,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&x);
	    printf("%d\n",(15*x));
	}
	return 0;
}