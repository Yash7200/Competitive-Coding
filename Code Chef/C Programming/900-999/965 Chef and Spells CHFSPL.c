//chef has 0 points initially.
//if he drinks any spell then points are increased by spell power value.

//before sleep chef drinks 2 spells find spells with max power value.
#include <stdio.h>
#include <math.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a,b,c;
	    scanf("%d %d %d",&a,&b,&c);
	    int max=fmax(fmax(a+b,a+c),b+c);
	    printf("%d\n",max);
	}
	return 0;
}