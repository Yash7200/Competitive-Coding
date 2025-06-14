#include <stdio.h>
int main(void)
{
	int t,x,y,z,w;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d%d",&w,&x,&y,&z);
	    if((w==x)||(w==y)||(w==z)||w==(x+y)||w==(x+z)||w==(y+z)||w==(x+y+z))
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