//3 combos --> a,b,c
//find a combo which gives him max satisfaction satisfaction based on long-lasting of combo
//we'll receive input values of coke & popcorn separately so we need total & among all 3 maximum will be answer
#include <stdio.h>
#include <math.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a1,a2,b1,b2,c1,c2;
	    scanf("%d %d",&a1,&a2);
	    scanf("%d %d",&b1,&b2);
	    scanf("%d %d",&c1,&c2);
	    int max=fmax(fmax(a1+a2,b1+b2),c1+c2);
	    printf("%d\n",max);
	}
	return 0;
}