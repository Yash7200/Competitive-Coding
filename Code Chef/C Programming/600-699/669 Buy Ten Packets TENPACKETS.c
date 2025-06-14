//Chef wants to buy 10 packets of an item
// 2 packets --> x price
// 4 packets --> y price

// x < y
//&
//y<=2*x
#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    printf("%d\n",(y*2+x));
	}
	return 0;
}