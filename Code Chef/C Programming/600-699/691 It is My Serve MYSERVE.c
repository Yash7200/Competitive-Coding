#include <stdio.h>
int main(void) {
    int t,p,q;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&p,&q);
        if((((p+q)/2)%2)==0)
        {
            printf("Alice\n");
        }
        else
        {
            printf("Bob\n");
        }
    }
	return 0;
}
