//n --> target for no. of blood donations
//x --> collected donations
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,x;
	    scanf("%d %d",&n,&x);
	    printf("%d\n",(n-x));
	}
	return 0;
}